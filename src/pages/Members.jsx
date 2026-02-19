import { useNavigate } from "react-router-dom"; 
import Header from "../components/Header";
import PrizeYearElement from "../components/PrizeYearElement";
import Banner from "../components/Banner";
import MemberPictureElement from "../components/MembersPictureElement";
import "../styles/Members.css"

function Members() {
  return (
    <div>
        <div>
            <Banner bannerIMG="/member_banner.svg" h1Title="MEMBERS" pExplanation1="MAS를 빛내고 지금까지 " pExplanation2="이끌어 온 부원들 입니다."/>
        </div>

        <div className="Year">
            <PrizeYearElement Year="4기" />
            <PrizeYearElement Year="5기" />
            <PrizeYearElement Year="6기" />
        </div>

        <div className="member_cards">
          <MemberPictureElement memberPicture="/mas5Hayun.svg" memberClass="뉴미디어소프트웨어과" memberName="강하윤" memberYear="5기" memberFea1="Full-Stack Developer" memberFea2="MAS 요정" />
          <MemberPictureElement memberPicture="/mas5Hayun.svg" memberClass="뉴미디어소프트웨어과" memberName="강하윤" memberYear="5기" memberFea1="Full-Stack Developer" memberFea2="MAS 요정" />
          <MemberPictureElement memberPicture="/mas5Hayun.svg" memberClass="뉴미디어소프트웨어과" memberName="강하윤" memberYear="5기" memberFea1="Full-Stack Developer" memberFea2="MAS 요정" />
        </div>

        <div className="member_cards">
          <MemberPictureElement memberPicture="/mas5Hayun.svg" memberClass="뉴미디어소프트웨어과" memberName="강하윤" memberYear="5기" memberFea1="Full-Stack Developer" memberFea2="MAS 요정" />
          <MemberPictureElement memberPicture="/mas5Hayun.svg" memberClass="뉴미디어소프트웨어과" memberName="강하윤" memberYear="5기" memberFea1="Full-Stack Developer" memberFea2="MAS 요정" />
          <MemberPictureElement memberPicture="/mas5Hayun.svg" memberClass="뉴미디어소프트웨어과" memberName="강하윤" memberYear="5기" memberFea1="Full-Stack Developer" memberFea2="MAS 요정" />
        </div>

        <div className="member_cards">
          <MemberPictureElement memberPicture="/mas5Hayun.svg" memberClass="뉴미디어소프트웨어과" memberName="강하윤" memberYear="5기" memberFea1="Full-Stack Developer" memberFea2="MAS 요정" />
          <MemberPictureElement memberPicture="/mas5Hayun.svg" memberClass="뉴미디어소프트웨어과" memberName="강하윤" memberYear="5기" memberFea1="Full-Stack Developer" memberFea2="MAS 요정" />
          <MemberPictureElement memberPicture="/mas5Hayun.svg" memberClass="뉴미디어소프트웨어과" memberName="강하윤" memberYear="5기" memberFea1="Full-Stack Developer" memberFea2="MAS 요정" />
        </div>
    </div>  
  );
}

export default Members;