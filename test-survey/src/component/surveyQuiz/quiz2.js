import React from 'react'
import * as Survey from 'survey-react'

const Quiz2 = () => {
    var json = {
        "pages": [
         {
          "name": "page1",
          "elements": [
           {
            "type": "text",
            "name": "question1",
            "title": "Your Name?"
           },
           {
            "type": "text",
            "name": "question2",
            "title": "Age"
           },
           {
            "type": "text",
            "name": "question3",
            "title": "Birth Date",
            "inputType": "date"
           }
          ]
         },
         {
          "name": "page2",
          "elements": [
           {
            "type": "text",
            "name": "question4",
            "title": "Age"
           }
          ]
         },
         {
          "name": "page3",
          "elements": [
           {
            "type": "text",
            "name": "question5",
            "title": "Birth Date",
            "inputType": "date"
           }
          ]
         }
        ]
    }
       
    return (
        <Survey.Survey
         json={json}
         />
     )
}

export default Quiz2