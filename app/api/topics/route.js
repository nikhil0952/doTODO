import connectMongoDb from "@/libs/monogodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(req){
    const {title, description} = await req.json();
    try{
        await connectMongoDb();
    }catch(error){
        console.log(error);
    }
    await Topic.create({title,description});
    return NextResponse.json({message : "Topic Created!"}, {status : 200});
}

export async function GET(req){
    await connectMongoDb();
    const values = await Topic.find();
    
    return NextResponse.json({values});
}

export async function DELETE(req){
    const id = req.nextUrl.searchParams.get("id");
    await connectMongoDb();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:"Deleted Successfully!"},{status:200});
}