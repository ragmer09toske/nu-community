

Share


You said:
#include <SoftwareSerial.h>
#include <Bonezegei_DHT11.h>
#include <Wire.h>
#include <LiquidCrystal_I2C.h>

// DHT11 sensor setup
Bonezegei_DHT11 dht(11);

// LCD setup
LiquidCrystal_I2C lcd(0x27, 16, 2);

// Moisture sensor and control pins
#define MOISTURE_SENSOR1_PIN 14   // Moisture sensor 1 pin (A0)
#define MOISTURE_SENSOR2_PIN 15   // Moisture sensor 2 pin (A1)
#define WATER_RELAY_PIN  3        // Relay pin for water pump
#define FAN_RELAY_PIN    4        // Relay pin for fan
#define RED_LED_PIN      5        // Red LED pin (for dry soil)
#define BLUE_LED_PIN     6        // Blue LED pin (for wet soil)
#define GREEN_LED_PIN    10        // Green LED pin (for hot weather)

// SIM808 module setup
SoftwareSerial sim808(7, 8); // RX, TX pins for SIM808

float temperature = 0.0;
float humidity = 0.0;

unsigned long lastGSMUpdateTime = 0;  // Store the last time GSM communication was triggered
unsigned long gsmInterval = 60000;    // Interval between GSM communication (1 minute)

void setup() {
  Serial.begin(9600);
  sim808.begin(9600);
  dht.begin();
  lcd.begin(16, 2); // Initialize the LCD with 16 columns and 2 rows

  pinMode(WATER_RELAY_PIN, OUTPUT);
  pinMode(FAN_RELAY_PIN, OUTPUT);
  pinMode(RED_LED_PIN, OUTPUT);
  pinMode(BLUE_LED_PIN, OUTPUT);
  pinMode(GREEN_LED_PIN, OUTPUT);

  lcd.backlight();
  lcd.print("Initializing...");
  delay(2000);
  lcd.clear();
}

void loop() {
  // Read temperature and humidity from DHT11
  if (dht.getData()) {
    temperature = dht.getTemperature();
    humidity = dht.getHumidity();
  }

  // Read soil moisture levels
  int moisture1 = analogRead(MOISTURE_SENSOR1_PIN);
  int moisture2 = analogRead(MOISTURE_SENSOR2_PIN);
  int avrmoist = (moisture1 + moisture2) / 2;

  // Display values on LCD
  lcd.setCursor(0, 0);
  lcd.print("Temp: " + String(temperature, 1) + "C");
  lcd.setCursor(0, 1);
  lcd.print("Hum: " + String(humidity) + "%");

  delay(5000); // Display temperature and humidity for 5 seconds

  lcd.clear();
  lcd.setCursor(0, 0);
  if (avrmoist > 600) {
    lcd.print("Pump: ON");
    digitalWrite(WATER_RELAY_PIN, HIGH);
    digitalWrite(RED_LED_PIN, HIGH);
    digitalWrite(BLUE_LED_PIN, LOW);
  } else {
    lcd.print("Pump: OFF");
    digitalWrite(WATER_RELAY_PIN, LOW);
    digitalWrite(RED_LED_PIN, LOW);
    digitalWrite(BLUE_LED_PIN, HIGH);
  }

  lcd.setCursor(0, 1);
  if (avrmoist > 800) {
    lcd.print("Soil: DRY");
  } else {
    lcd.print("Soil: WET");
  }

  delay(5000); // Display soil moisture status for 5 seconds

  // Fan control based on temperature
  if (temperature > 28.0) {
    digitalWrite(FAN_RELAY_PIN, HIGH);
    digitalWrite(GREEN_LED_PIN, HIGH);
  } else {
    digitalWrite(FAN_RELAY_PIN, LOW);
    digitalWrite(GREEN_LED_PIN, LOW);
  }

  // Print values to Serial Monitor
  Serial.print("Temperature: ");
  Serial.print(temperature, 1);
  Serial.println("°C");
  Serial.print("Humidity: ");
  Serial.print(humidity);
  Serial.println("%");
  Serial.print("Moisture 1: ");
  Serial.print(moisture1);
  Serial.print("\tMoisture 2: ");
  Serial.println(moisture2);
  Serial.print("Average Moisture: ");
  Serial.println(avrmoist);

  // Check if it's time to update the GSM module
  if (millis() - lastGSMUpdateTime >= gsmInterval) {
    lastGSMUpdateTime = millis();
    sendDataToThingSpeak(avrmoist, temperature, humidity); // Call the function to send data
  }

  if (sim808.available()) {
    Serial.write(sim808.read());
  }
}

void sendDataToThingSpeak(int avrmoist, float temperature, float humidity) {
  sim808.println("AT");
  delay(1000);
  sim808.println("AT+CPIN?");
  delay(1000);
  sim808.println("AT+CREG?");
  delay(1000);
  sim808.println("AT+CGATT?");
  delay(1000);
  sim808.println("AT+CIPSHUT");
  delay(1000);
  sim808.println("AT+CIPSTATUS");
  delay(2000);
  sim808.println("AT+CIPMUX=0");
  delay(2000);

  ShowSerialData();

  sim808.println("AT+CSTT=\"internet\""); //start task and setting the APN,
  delay(1000);
  ShowSerialData();

  sim808.println("AT+CIICR"); //bring up wireless connection
  delay(3000);
  ShowSerialData();

  sim808.println("AT+CIFSR"); //get local IP address
  delay(2000);
  ShowSerialData();

  sim808.println("AT+CIPSPRT=0");
  delay(3000);
  ShowSerialData();

  sim808.println("AT+CIPSTART=\"TCP\",\"api.thingspeak.com\",\"80\""); //start up the connection
  delay(6000);
  ShowSerialData();

  sim808.println("AT+CIPSEND"); //begin send data to the remote server
  delay(4000);
  ShowSerialData();

  String str = "GET https://api.thingspeak.com/update?api_key=J08BGFQHO7RH0A1Q&field1=" + String(avrmoist) + "&field2=" + String(temperature) + "&field3=" + String(humidity);
  Serial.println(str);
  sim808.println(str); //begin send data to the remote server

  delay(4000);
  ShowSerialData();

  sim808.println((char)26); //sending
  delay(5000); //waiting for reply, important! the time is based on the condition of the internet 
  sim808.println();
  ShowSerialData();

  sim808.println("AT+CIPSHUT"); //close the connection
  delay(100);
  ShowSerialData();
  Serial.println("END CONNECTION...........................");
}

void ShowSerialData() {
  while (sim808.available() != 0) {
    char c = sim808.read();
    Serial.write(c);  // Show data in Serial Monitor
  }
  delay(5000); // Adjust this delay according to your requirements
}

// 25