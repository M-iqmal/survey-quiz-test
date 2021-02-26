import React from 'react'
import * as Survey from 'survey-react'

const Quiz3 = () => {
    var json = {
        "pages": [
         {
          "name": "page1",
          "elements": [
           {
            "type": "radiogroup",
            "name": "question1",
            "title": "4+5x3",
            "choices": [
             {
              "value": "item1",
              "text": "28"
             },
             {
              "value": "item2",
              "text": "17"
             },
             {
              "value": "item3",
              "text": "19"
             }
            ]
           },
           {
            "type": "checkbox",
            "name": "question2",
            "title": "Thing for better health",
            "choices": [
             {
              "value": "item1",
              "text": "Exercise"
             },
             {
              "value": "item2",
              "text": "Taking care of nutrition"
             },
             {
              "value": "item3",
              "text": "All of the above"
             }
            ]
           }
          ]
         },
         {
          "name": "page2",
          "elements": [
           {
            "type": "text",
            "name": "question3",
            "title": "Name a Malaysian state"
           },
           {
            "type": "boolean",
            "name": "question4",
            "title": "Smartphone is essential in today society"
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

export default Quiz3