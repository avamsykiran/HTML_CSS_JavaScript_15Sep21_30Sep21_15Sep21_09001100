HTML 5
----------------------------------------------------------------------------

    Hyper Text MarkUp Language

        is documentation language.
        generating html documents that can be shared across the http protocol and
        are rendered on a browser.

        Hyper Text
            Formated and Plain Text
            Graphiscs
            Links

        The content is wrapped inside an html element represented by an open and close tag

            <tag>content</tag>

    Lab Setup

        VSCode
        Chrome

    HTML document

        <!DOCTYPE html>

        <html>
            <head>
                <!-- meta data -->
            </head>
            <body>
                <!-- actual content -->
            </body>
        </html>

    HTML basics
        heading,paragraphs and typology
    
        h1 h2 h3 h4 h5 h6           block elements
        p                           block elements
        b i u strong em             inline elements
        sup sub                     inline elements
        blockquote                  block element
        div                         block element
        span                        inline eleemnt

    HTML Lists

        ol          Ordered list
            type    attribute takes 1,a,A,I,i as values
        ul          Unordered list
            type    attribute takes dot,circle,square as values   

        li          list item is a sub-tag of ol and ul.

    HTML Tables    
        table                   to create a table
                border          attribute takes 1 to 5
                width           attribute takes a value in px/%/em/pt/in/cm
                heigth          attribute takes a value in px/%/em/pt/in/cm
                cellspacing     attribute takes a valeu in px/%/em/pt/in/cm and controls the spacing between two 
                                cells
                cellpadding     attribute takes a valeu in px/%/em/pt/in/cm and controls the spacing between the 
                                cell border and its content

        caption                 sub-element to give a heading to the table
        tr                      table row is a sub element representing one row
        th                      table hader cell, a sub-element of tr
        td                      table data cell, a sub-element of tr
                rowspan         attribute of th and td representing the number of rows to be occupied default is 1
                colspan         attribute of th and td representing the number of columns to be occupied default is 1
       
    HTML Media

        img         inline element that injects an image inot the page
             src    attribute of img tag to hold the relative or absolute or virtual path 
                    of the image

        audio       inline element to inject an audio
        video       inline element to inject a video
        source      sub-element of audio and video to supply the audio file or video file
                    a single audio or video element can house anynumber of source tags
                    each represeting a different format of audio or video.
            src     attibute of source to hold the relative or absolute or virtual path 
                    of the audio or video file


    HTML Links
    HTML Form Elements
    HTML Layouts and sematic elements
    HTML entities
    HTML API
        GeoLocation
        Canvas
        SVG
        Drag and Drop
        Web Stoirage