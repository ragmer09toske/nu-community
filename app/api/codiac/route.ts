import mongoose from "mongoose";
// const uri = `mongodb+srv://$retsepileraymondshao:Thakasolerato18@next.94i7emo.mongodb.net/?retryWrites=true&w=majority`;
import { MongoClient, ServerApiVersion } from 'mongodb';
const uri = "mongodb+srv://retsepileraymondshao:Thakasolerato18@next.94i7emo.mongodb.net/?retryWrites=true&w=majority&appName=Next";
export async function GET(request: Request, response:Response) {
    console.log("GET Request")
}

export async function POST(request: Request, response:Response) {
    console.log("Post Request")
}

export async function DELETE(request: Request, response:Response) {
    console.log("DELETE Request")
}

export async function PUT(request: Request, response:Response) {
    console.log("PUT Request")
}




// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
