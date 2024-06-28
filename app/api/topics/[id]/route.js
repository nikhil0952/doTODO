import connectMongoDb from "@/libs/monogodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function PUT(req, {params}){
    // console.log(params);

    const {id} = params;
    const {updateTitle:title, updateDescription : description} = await req.json();
    await connectMongoDb();
    await Topic.findByIdAndUpdate(id, {title,description});
    return NextResponse.json({message: "Updated Successfully"},{status:200}); 
}

export async function GET(req, {params}){
    const {id} = params;
    await connectMongoDb();
    const value = await Topic.findById(id);
    return NextResponse.json({value});
    
}