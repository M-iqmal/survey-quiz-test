import React from 'react'
import * as Survey from 'survey-react'

const Quiz1 = () => {
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
         }
        ]
    }
       
    return (
        <Survey.Survey
         json={json}
         />
     )
}

export default Quiz1