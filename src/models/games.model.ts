
import mongoose, {Schema, Document} from "mongoose";

interface IGames extends Document {
    nameGames: string;
    infoGames: string;
    studiGames: string;
    priceGames: Number;
}

const gamesSchema = new Schema<IGames>({
    nameGames: {type: String, required: true},
    infoGames: {type: String, required: true},
    studiGames: {type: String, required: true},
    priceGames: {type: Number, required: true},
});

export default mongoose.model<IGames>("Games", gamesSchema);