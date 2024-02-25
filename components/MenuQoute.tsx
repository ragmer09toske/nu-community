import { ArrowDownToDot, MinusCircle, PlusCircle, RemoveFormattingIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Separator } from './ui/separator';
// import { ScrollArea } from './ui/scroll-area';
import { ScrollArea } from "@/components/ui/scroll-area"


interface Skill {
    name: string;
    price: number;
    description?: string;
    description2?: string;
}

function MenuList() {
    const [chosenSkills, setChosenSkills] = useState<Skill[]>([]);
  const [totalPrice, setTotalPrice] = useState<number | undefined>();
  // Step 1: Initialize state variables for the lists
  const [availableSkills, setAvailableSkills] = useState<Skill[]>([
    { name: 'Web design', price: 7800, description: "Custom Web Solutions: Think of your website as a bespoke digital space crafted just for you. We build unique online experiences that match your brand's vision and needs.", description2: "UX/UI Design: We ensure your website is not only beautiful but also user-friendly. Our designs make navigation a breeze, leaving a lasting impression." },
    { name: 'Web Hosting', price: 830, description: 'We provide the digital home for your website, making it accessible and secure 24/7. Focus on your business while we handle the technical details.' },
    { name: 'SEO', price: 1080, description: 'Search Engine Optimization: Elevate your online visibility with our SEO expertise. We optimize your website to rank higher on search engines, ensuring more people discover your business online.' },
    { name: 'CMS', price: 6000, description: "Content Management System: Take control of your website's content effortlessly. With our CMS solutions, you can easily update, add, or manage your website's content, keeping it fresh and engaging for your audience." },
    { name: 'E-commerce', price: 24740, description: 'Boost your online sales and reach a global audience with our E-commerce solutions. We create powerful online stores that are easy to manage and designed for success in the digital marketplace.' },
    { name: 'Website Maintenance', price: 6000, description: 'Keep your online presence running smoothly. Our maintenance services ensure your website stays up-to-date, secure, and optimized, so you can focus on your business while we take care of your digital asset.' },
    { name: 'Mobile App Development', price: 20540, description: 'Bring your ideas to life with our mobile app expertise. We create customized, user-friendly mobile applications that expand your reach and engage your audience on smartphones and tablets.' },
    { name: 'Consulting and Strategy', price: 12000, description: "Gain expert insights and a roadmap for success. Our consulting services provide tailored strategies to help you achieve your digital goals, whether it's optimizing your online presence or expanding your digital footprint." },
    { name: 'Web Analytics', price: 1300, description: "Understand and improve your online performance. Our web analytics solutions provide valuable insights into your website's traffic, user behavior, and performance, helping you make data-driven decisions to enhance your online presence." },
    { name: 'Security Auditing', price: 7550, description: 'Protect your digital assets. Our security auditing services identify vulnerabilities and weaknesses in your online systems, ensuring robust protection against cyber threats and data breaches' },
    { name: 'Domain Registration', price: 860, description: "Secure your online identity. We offer domain registration services, allowing you to claim your unique web address and establish your brand's presence on the internet." },
    { name: 'Training and Workshops', price: 2100, description: 'Empower your team with knowledge. Our training and workshops provide hands-on learning experiences to enhance your digital skills and stay updated with the latest industry trends and technologies' },
    { name: 'Email Campaigning', price: 2100, description: "Connect with your audience effectively. We create and manage email campaigns that deliver engaging content, promotions, and updates directly to your target audience's indives, fostering customer engagement and growth." },
    { name: 'Speed Up the Process', price: 2250, description: 'We expedite your progress, ensuring efficiency and prompt results.' },
  ]);

  // Step 2: Create a function to add a skill to the chosen list
  const addChosenSkill = (chosenSkill: Skill) => {
    // Remove the chosen skill from available skills
    const updatedAvailableSkills = availableSkills.filter(skill => skill !== chosenSkill);
    setAvailableSkills(updatedAvailableSkills);

    // Add the chosen skill to the chosen skills list
    setChosenSkills([...chosenSkills, chosenSkill]);
  };

  // Step 3: Create a function to remove a skill from the chosen list
  const removeChosenSkill = (skillToRemove: Skill) => {
    const updatedChosenSkills = chosenSkills.filter((skill) => skill !== skillToRemove);
    setChosenSkills(updatedChosenSkills);

    // Add the removed skill back to available skills
    setAvailableSkills([...availableSkills, skillToRemove]);
  };

  useEffect(() => {
    // Calculate the total price when chosenSkills change
    const newTotalPrice = chosenSkills.reduce((total, skill) => total + skill.price, 0);
    setTotalPrice(newTotalPrice);
  }, [chosenSkills]);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column', // Both containers in a row
      gap: 3,
    }}
    >

      <div style={{
        flex:"1", 
      }}
      >
        <div className="w-full" style={{ borderTopWidth: "1px"}}></div>
        <h2 style={{fontSize:13}}><b>Services</b></h2>
        <div className="w-full" style={{ borderTopWidth: "1px"}}></div><br />
        <div style={{
        }}
        >
          <div className='flex flex-col gap-2'>
          <ScrollArea className="h-[200px] w-[100%] rounded-md border p-2">
            {availableSkills.map((skill, index) => (
              <div key={index} className='flex flex-col gap-5'>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 1,
                  fontSize: 13
                }}>
                  <p key={index}>
                    {skill.name} <br/> M{skill.price}.00
                  </p>
                  <div className="round-full-Icon">
                    <PlusCircle size={15}  onClick={() => addChosenSkill(skill)} />
                  </div>
                </div>
              </div>
            ))}
          </ScrollArea>
          </div>
        </div>
      </div>
      <br />
      {totalPrice && <div 
        className="w-full">
        <div className="w-full" style={{ borderTopWidth: "1px"}}></div>
        <h2 style={{fontSize:13}}><b>Quotation</b></h2>
        <div className="w-full" style={{ borderTopWidth: "1px"}}></div><br />
        <ScrollArea className="h-[200px] w-[100%] rounded-md border p-2">
        <div className='flex flex-col gap-5 p-5'>
          {chosenSkills.map((chosenSkill, index) => (
            <div key={index} style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 2
            }}>
            <p style={{fontSize:13}} key={index}>
              {chosenSkill.name}
              <br/>
              M{chosenSkill.price}.00
            </p>
            <div className="round-full-Icon">
              <MinusCircle size={15} onClick={() => removeChosenSkill(chosenSkill)} />
            </div>
          </div>
          ))}
        </div>
        </ScrollArea>
        <br />
        <div className="w-full" style={{ borderTopWidth: "1px"}}></div>
        <p  style={{fontSize:13}}>
          <b>total: M{totalPrice}.00</b>
        </p>
        <div className="w-full" style={{ borderTopWidth: "1px"}}></div>
      </div>}
    </div>
  );
}

export default MenuList;
