"use client"
import React, { useEffect, useState } from 'react'
import { MockInterview } from '@/utils/schema';
import { db } from '@/utils/db';
import { eq } from 'drizzle-orm';
import { json } from 'drizzle-orm/mysql-core';
import QuestionSection from '@/app/dashboard/_components/QuestionSection';
import RecordAnsSection from '@/app/dashboard/_components/RecordAnsSection';
function StartInterview({params }) {

    const [interviewData,setInterviewData]=useState()
    const [mockInterviewQuestion,setMockInterviewQuestion] = useState();
    const[activeQuestionIndex,setActiveQuestionIndex] = useState(0)
    useEffect(()=>{
        GetInterviewDetails();
    },[])

    // to get interview details by mockId/Interview id
    const GetInterviewDetails = async () => {
        const result = await db.select().from(MockInterview)
         .where(eq(MockInterview.mockId, params.interviewId));

        const jsonMockResp = JSON.parse(result[0].jsonMockResp)
        console.log(jsonMockResp)
        
        setMockInterviewQuestion(jsonMockResp);
        setInterviewData(result[0])
     }

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
        {/* Questions */}
        <QuestionSection mockInterviewQuestion={mockInterviewQuestion}
        activeQuestionIndex={activeQuestionIndex}/>
        
        {/*Video/Audio Recording */}
        <RecordAnsSection/>
    </div>
  )
}

export default StartInterview