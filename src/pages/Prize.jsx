import { useNavigate } from "react-router-dom"; 
import Header from "../components/Header";
import PrizeYearElement from "../components/PrizeYearElement";
import PrizePictureElement from "../components/PrizePictureElement";
import "../styles/Prize.css"

function Prize() {
  return (
    <div>
        <div className="PrizeSection">
            <div className="PrizePart">
                <h1 className="PRIZE">PRIZE</h1>
                <p className="explanation">끊임 없는 노력과 성장으로 <br />인정받은 MAS의 주요 성과입니다.</p>
            </div>
        </div>

        <div className="Year">
            <PrizeYearElement Year="2026" />
            <PrizeYearElement Year="2025" />
            <PrizeYearElement Year="2024" />
        </div>
            
        <div className="prizePicture">
            <PrizePictureElement PictureElement="/ExPrizePic.svg" />
            <PrizePictureElement PictureElement="/ExPrizePic.svg" />
            <PrizePictureElement PictureElement="/ExPrizePic.svg" />
        </div>

        <div className="prizePicture">
            <PrizePictureElement PictureElement="/ExPrizePic.svg" />
            <PrizePictureElement PictureElement="/ExPrizePic.svg" />
            <PrizePictureElement PictureElement="/ExPrizePic.svg" />
        </div>

        <div className="prizePicture">
            <PrizePictureElement PictureElement="/ExPrizePic.svg" />
            <PrizePictureElement PictureElement="/ExPrizePic.svg" />
            <PrizePictureElement PictureElement="/ExPrizePic.svg" />
        </div>
    </div>  
  );
}

export default Prize;