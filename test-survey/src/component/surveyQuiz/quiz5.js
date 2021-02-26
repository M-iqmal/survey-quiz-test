import React from 'react'
import * as Survey from 'survey-react'

const Quiz = () => {
    var json = {
        "pages": [
         {
          "name": "page1",
          "elements": [
           {
            "type": "dropdown",
            "name": "question1",
            "title": "Gender",
            "choices": [
             {
              "value": "item1",
              "text": "Male"
             },
             {
              "value": "item2",
              "text": "Female"
             }
            ]
           },
           {
            "type": "rating",
            "name": "question2",
            "title": "rating on the product"
           }
          ]
         },
         {
          "name": "page2",
          "elements": [
           {
            "type": "comment",
            "name": "question3",
            "title": "Allergies?"
           },
           {
            "type": "comment",
            "name": "question4",
            "title": "Surgical history"
           }
          ]
         },
         {
          "name": "page3",
          "elements": [
           {
            "type": "comment",
            "name": "question5",
            "title": "share anything to doctor"
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

export default Quiz5