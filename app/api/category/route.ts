import connectDB from "@/config/db";
import { getCategory, addCategory } from "@/controller/category";


export async function GET(request: Request) {
    connectDB();
    console.log("Get Category!");
    const { statusCode, data, flag, desc, message } = await getCategory();

    if (flag) {
        return Response.json({
            desc, message, data
        }, {
            status: statusCode,
        });
    } else {
        return Response.json({
            desc, message, data
        }, {
            status: statusCode,
        });
    }
}

export async function POST(request: Request) {
    connectDB();
    console.log("Add Category!");
    const categoryBody = await request.json();

    const { statusCode, data, flag, desc, message } = await addCategory({ ...categoryBody });

    if (flag) {
        return Response.json({
            desc, message, data
        }, {
            status: statusCode,
        });
    } else {
        return Response.json({
            desc, message, data
        }, {
            status: statusCode,
        });
    }
}