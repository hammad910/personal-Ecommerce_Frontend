import mongoose from "mongoose"


const mongoDBConnect =async () => {
    try {
        const mongoDBConnect =await mongoose.connect(`${process.env.MONGODB_URI}`)
        console.log(`DB connected Successfully!! ${mongoDBConnect.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

export {mongoDBConnect}