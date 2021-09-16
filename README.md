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

        img         inline element that injects an image into the page
             src    attribute of img tag to hold the relative or absolute or virtual path 
                    of the image

        audio       inline element to inject an audio
        video       inline element to inject a video
        source      sub-element of audio and video to supply the audio file or video file
                    a single audio or video element can house anynumber of source tags
                    each represeting a different format of audio or video.
            src     attibute of source to hold the relative or absolute or virtual path 
                    of the audio or video file

        iframe      used to embed an external web page into our own web page.
            src     attribute to hold the web address of the webpage you wish to embed.

    HTML Links
        a           amchor tag 
            href    attribute takes the target file path.
            target  attribute takes _self/_blank/iframeName

    HTML Form Elements
        form                is used to group a set of fields that have to be submitted to a server program.
            action          attribute takes the path of the server program to which the data has to be submitted
            method          attribute that takes GET/POST
        
        label               used to carry a text related to a field like field names
            for             attribute takes th id of the input element to which the label is related to.

        input               used to create a form field control that enable inputting data
            type            text
                            file
                            password
                            checkbox
                            radio

                            number
                            range
                            decimal
                            email
                            date
                            datetime-locale
            
            id              attribute is used to give an id to the input element.
            name            attribute is sued to give a field name that is carried along with its value to the server.
            value           attribute takes the initial vbalue of the field

            required        attribute ensures that the field is given a value mandatly
            min             attribute that takes a minimum possible value for type="number/decimal/date"
            max             attribute that takes a maximum possible value for type="number/decimal/date"
            minlength       attribute that takes a minimum length of the value while type="text"
            maxlength       attribute that takes a maximum length of the value while type="text"
            pattern         attribute that takes a reglar expression to validate the value while type="text"

        textarea            used to accpet multi line text
        
        select              used to create a drop-down or a list box
            multiple        attribute makes the drop-down into a list enabling multiple option selection
         option             is a sub-element of select used to provide the options
            value           attribute of option tag that takes the value to be submitted if this option is selected

        button              used to create a push button
            type            submit      (defualt)
                            reset
                            button

    HTML Layouts and sematic elements

        <header>    - Defines a header for a document or a section
        <nav>       - Defines a set of navigation links
        <section>   - Defines a section in a document
        <article>   - Defines an independent, self-contained content
        <aside>     - Defines content aside from the content (like a sidebar)
        <footer>    - Defines a footer for a document or a section
        <details>   - Defines additional details that the user can open and close on demand
        <summary>   - Defines a heading for the <details> element
        <figure>    - Defines a self-contained content, like illustrations, diagrams, photos, code listings..etc
        <figcaption>- Defines a caption for a <figure> element.
        <time>	    - Defines a date/time


    HTML entities

        Result	        Description	            Entity Name	    Entity Number
        =============================================================================
        non-breaking    space	                &nbsp;	        &#160;
        <	            less than	            &lt;	        &#60;
        >	            greater than	        &gt;	        &#62;
        &	            ampersand	            &amp;	        &#38;
        "	            double quotation mark	&quot;      	&#34;
        '	            single quotation mark 	&apos;      	&#39;
        ¢	            cent	                &cent;	        &#162;
        £	            pound	                &pound;	        &#163;
        ¥	            yen	                    &yen;	        &#165;
        €	            euro	                &euro;	        &#8364;
        ©	            copyright	            &copy;	        &#169;
        ®	            registered trademark	&reg;	        &#174;
    
    HTML API
        GeoLocation
        Canvas
        SVG
        Drag and Drop
        Web Stoirage