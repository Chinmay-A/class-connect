// const { connect } = require('http2');
// const mongoose= require('mongoose')

// const URI="mongodb+srv://classconnect2023:dnzEcQDErO9QtM3E@classconnect.yiphpts.mongodb.net/?retryWrites=true&w=majority"

// const connectDB=async()=>{
//     try{
//         const connect=await mongoose.connect(URI,{
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useFindAndModify:false,
//             useCreateIndex:true
//         })
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// connectDB();

// console.log(`Connected: ${connect.connection}`);


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://classconnect2023:dnzEcQDErO9QtM3E@classconnect.yiphpts.mongodb.net/classconnect2023?retryWrites=true&w=majority";

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
//run().catch(console.dir);

module.exports=run;
