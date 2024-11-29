"use client"
import React from "react";
import { useState, useEffect } from "react";
import './computingCourseList.json'
import './designCourseList.json'

const Courses = () =>{
//     let courseType = "computing";
// courseTable(courseType);
// courseType = "design";
// courseTable(courseType);
// function courseTable (courseType){
//   let elementId = "null";
//   let jsonFile = "null";
// //const computingCourseList = document.querySelector(".computingCourses");
// if(courseType == "computing"){ elementId = "computingCoursesData"; jsonFile ="./computingCourseList.json";}
// else if(courseType == "design"){ elementId = "designCoursesData"; jsonFile = "./designCourseList.json";}
// const courseList = document.getElementById(elementId);
// fetch(jsonFile)
//     .then(response => response.json())
//     .then(data => {
//       console.dir(data);
//       data.forEach((item) => {
//         const row1 = document.createElement("tr");
//         const courseName = document.createElement("td");
        
//         const ucasPoints = document.createElement("td");
//         const ucasCode = document.createElement("td");
        
        
//         const row2 = document.createElement("tr");
//         const awardName = document.createElement("td");
//         const isUndergraduate = document.createElement("td");
//         const isRecruiting = document.createElement("td");

//         const entryYear = document.createElement("td");
//         const studyLength = document.createElement("td");
//         const hasFoundation = document.createElement("td");

//         const row3 = document.createElement("tr");
//         const isFullTime = document.createElement("td");
//         const courseDescription = document.createElement("td");
//         const row4 = document.createElement("tr");

//         courseName.textContent = item.CourseTitle;
//         ucasPoints.textContent = item.UcasPoints;
//         ucasCode.textContent = item.UcasCode;
//         awardName.textContent = item.CourseAwardName;
//         isUndergraduate.textContent = item.CourseType;
//         isRecruiting.textContent = item.NoLongerRecruiting;
//         if(isRecruiting.textContent == "false") {isRecruiting.textContent = "Recruiting";}
//         else if(isRecruiting.textContent == "true") {isRecruiting.textContent = "Not Recruiting";}
//         entryYear.textContent = item.YearOfEntry;
//         studyLength.textContent = item.StudyLength;
//         hasFoundation.textContent = item.HasFoundationYear;
//         if(hasFoundation.textContent == "false") {hasFoundation.textContent = "No Foundation Year";}
//         else if(hasFoundation.textContent == "true") {hasFoundation.textContent = "Has Foundation Year";}
//         isFullTime.textContent = item.ModeOfAttendance;
//         courseDescription.textContent = item.CourseSummary;
//         row1.appendChild(courseName);
//         row1.appendChild(ucasPoints);
//         row1.appendChild(ucasCode);
//         row2.appendChild(awardName);
//         row2.appendChild(isUndergraduate);
//         row2.appendChild(isRecruiting);
//         row3.appendChild(entryYear);
//         row3.appendChild(studyLength);
//         row3.appendChild(hasFoundation);
//         row4.appendChild(isFullTime);
//         row4.appendChild(courseDescription);
        

//         courseList.appendChild(row1);
//         courseList.appendChild(row2);
//         courseList.appendChild(row3);
//         courseList.appendChild(row4);



//         // row.appendChild(nameCell);
//         //     row.appendChild(emailCell);
//         //     staffTable.appendChild(row);





//       });
//   })
//       .catch(error => {
//           console.error("Error loading JSON:", error);
//           // Handle errors here
//       });
// };
let [compCourseData, setCompCourseData] = useState(null);
let dataURL = "./computingCourseList.json";
let courseType = "computing";
SetData(courseType);
let [dsgnCourseData, setDsgnCourseData] = useState(null);
dataURL = "./computingCourseList.json";
courseType = "design";
SetData(courseType);
function SetData () {
useEffect(()=>{
    fetch(dataURL)
    .then(response => response.json())
    .then(data => {
        if(courseType=="computing") {setCompCourseData(data);}
        else if(courseType=="design") {setDsgnCourseData(data);}
        console.dir(data);
    })
},[])
}
    return(
        <div>
            <h2 class="sectionTitle">Courses at Cantor College</h2>
            <div class="sectionInfo">
            <div class="infoBox">
                <h3>Computing Courses</h3>
                <p>
                    The College offers a range of courses to suit applicants with varying backgrounds and educational abilities. 
                    At undergraduate level, there are single BSc Honours Degree courses in Computing, 
                    Computer Networks, Software Engineering and Cyber Security with Forensics amongst others.
                    The College teaches undergraduate and postgraduate courses in a wide range of specialisms, 
                    including computer science, software development, information systems, networking and software engineering. 
                    It is at the heart of a passionate computing community, including student societies devoted to games development, 
                    digital forensics and programming.
                    The courses are British Computer Society accredited and are highly relevant to modern industry. 
                    They are designed to prepare students for professional occupations in Computing and related fields. 
                    Many graduates continue their studies to pursue a higher degree such as an MSc. or PhD.
                </p>
            </div>
            <div class="infoBox">
                <h3>Design Courses</h3>
                <p>
                    The College is an internationally connected creative community of diverse disciplines housed under one roof. 
                    We shape our students' futures, preparing them to shape the world through applied knowledge and creativity.
The College's art and design courses don't just train you, they promote alternative ways of thinking, making and communicating; 
they provide you with space, tools and inspiration to develop your creative practice and a clear career path. 
You'll get expert teaching from active practitioners and researchers, 
who will encourage you to adopt innovative and resourceful approaches, that both perceive and create opportunities for better lives.
You’ll develop your creative practice whilst interacting with your peers in well-equipped studios, making and digital workshops. 
At the same time, you'll learn professional skills by working on applied briefs facilitated through our links with commercial clients, 
cultural institutions, businesses and organisations.
                </p>
            </div>
        </div>
        </div>
    )
}

export default Courses;