import React from "react"
import { Link } from "react-router-dom"

function Projects() {

    const people = [
        {
            id: 1,
            username: "username1",
            profile: "picture1",
            major: "major1",
            career: "career1",
            description: "description1",
            specs: "specs1",
            place: "place1",
            school: "school1"
        },
        {
            id: 2,
            username: "username2",
            profile: "picture2",
            major: "major2",
            career: "career2",
            description: "description2",
            specs: "specs2",
            place: "place2",
            school: "school2"
        },
        {
            id: 3,
            username: "username3",
            profile: "picture3",
            major: "major3",
            career: "career3",
            description: "description3",
            specs: "specs3",
            place: "place3",
            school: "school3"
        }
    ]

    return (
        <div className="max-w-4xl mx-auto px-4 pt-10">
            <div className="flex flex-col w-full justify-end pt-4 px-2 gap-4">
                <h2 className="grow text-4xl font-bold mb-4">People</h2>
                <Link to="/" className="flex justify-center items-center w-full text-white bg-sky-500 hover:bg-sky-600 rounded-2xl py-4 text-lg font-semibold transition-all ease-in-out cursor-pointer" >프로젝트 등록하기</Link>
                <div className="flex flex-col justify-end gap-4">
                    {
                        people.map((data) => {
                            return (
                                <div key={data.id} className="w-full px-4 py-2 border-2 rounded-2xl border-gray-200">
                                    <div>{data.username}</div>
                                    <div>{data.profile}</div>
                                    <div>{data.major}</div>
                                    <div>{data.career}</div>
                                    <div>{data.description}</div>
                                    <div>{data.specs}</div>
                                    <div>{data.place}</div>
                                    <div>{data.school}</div>
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