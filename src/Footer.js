import React from 'react'

function Footer() {
    return (
        <div className="bg-gray-100 w-full">
            <div className="max-w-6xl mx-auto px-8 pt-12 mt-24">
                <p className="text-2xl">고객 센터</p>
                <p className="text-xl">09:00 ~ 18:00</p>
                <p className="text-xl">주말, 공휴일 휴무</p>
                <div className="lex w-full justify-end pt-4">
                    <a href="#top" className="px-4 py-2 bg-gray-300 rounded-md">1:1 문의</a>
                </div>
            </div>
            <div className="max-w-6xl mx-auto px-8 mt-12 mb-12 text-gray-600">
                <p>
                    (주)갯피는 통신판매중개자로서 통신판매의 당사자가 아니며 개별 판매자가 제공하는 서비스에 대한 이행, 계약사항 등과 관련한 의무와 책임은 거래당사자에게 있습니다.
                </p>
                <p>
                    (주)갯피 사이트의 상품/판매회원/중개 서비스/거래 정보, 콘텐츠, UI 등에 대한 무단복제, 전송, 배포, 스크래핑 등의 행위는 저작권법, 콘텐츠산업 진흥법 등 관련법령에 의하여 엄격히 금지합니다 <a href="#top">[안내 보기]</a>
                </p>
                <p>
                    상호명:(주)갯피 · 대표이사:KIM BLABLA · 개인정보책임관리자:김태우 · 주소:서울특별시 강남구 테헤란로 415, L7 강남타워 5층
                </p>
                <p>
                    사업자등록번호:000-00-00000 · 통신판매업신고증:제 0000-서울강남-00000 호 · 직업정보제공사업 신고번호:대구청 제 0000-00호
                </p>
                <p>
                    고객센터:1599-0000 · 이메일:support@getp.com
                </p>
                <p>
                    Copyright ©Getp Inc. All Rights Reserved.
                </p>
            </div>
        </div >
    )
}

export default Footer