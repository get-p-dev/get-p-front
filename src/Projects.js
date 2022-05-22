import React from "react"
import { Link } from "react-router-dom"

function Projects() {
    const projects = [
        {
            id: 1,
            title: "프로젝트 제목",
            date: "2022-01-01 ~ 2022-12-31",
            roll: "원하는 업무",
            prefered: "우대사항",
            communication: "온라인/오프라인",
            price: "상금과 퍼센트",
            hashtag: "#해시태그",
            etc: "기타"
        },
        {
            id: 2,
            title: "프로젝트 제목",
            date: "2022-01-01 ~ 2022-12-31",
            roll: "원하는 업무",
            prefered: "우대사항",
            communication: "온라인/오프라인",
            price: "상금과 퍼센트",
            hashtag: "#해시태그",
            etc: "기타"
        },
        {
            id: 3,
            title: "프로젝트 제목",
            date: "2022-01-01 ~ 2022-12-31",
            roll: "원하는 업무",
            prefered: "우대사항",
            communication: "온라인/오프라인",
            price: "상금과 퍼센트",
            hashtag: "#해시태그",
            etc: "기타"
        },
    ]

    return (
        <div className="max-w-4xl mx-auto px-4 pt-10">
            <div className="flex flex-col w-full justify-end pt-4 px-2 gap-4">
                <h2 className="grow text-4xl font-bold mb-4">Projects</h2>
                <Link to="/" className="flex justify-center items-center w-full text-white bg-sky-500 hover:bg-sky-600 rounded-2xl py-4 text-lg font-semibold transition-all ease-in-out cursor-pointer" >프로젝트 등록하기</Link>
                <div className="flex flex-col justify-end gap-4">
                    {
                        projects.map((data) => {
                            return (
                                <div key={data.id} className="flex flex-col w-full px-6 py-6 border-2 rounded-2xl border-gray-200">
                                    <div>
                                        <div className="text-2xl font-bold">{data.title}</div>
                                        <div className="flex flex-col gap-2 my-2">
                                            <div>
                                                <span className="font-bold mr-1">
                                                    기갼:
                                                </span>
                                                {data.date}
                                            </div>
                                            <div>
                                                <span className="font-bold mr-1">원하는 업무:</span>
                                                {data.roll}
                                            </div>
                                            <div>
                                                <span className="font-bold mr-1">우대사항:</span>
                                                {data.prefered}
                                            </div>
                                            <div>
                                                <span className="font-bold mr-1">미팅 방법:</span>
                                                {data.communication}
                                            </div>
                                            <div>
                                                <span className="font-bold mr-1">상금:</span>
                                                {data.price}
                                            </div>
                                            <div>
                                                <span className="font-bold mr-1">관련 해시태그: </span>
                                                {data.hashtag}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects