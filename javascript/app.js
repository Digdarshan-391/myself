const sections=document.querySelectorAll('.section');
const sectBtns=document.querySelectorAll('.controls');
const sectBtn=document.querySelectorAll('.control');
const allSection=document.querySelector('.main-content');

function PageTransitions()
{
    //Button click active class
    for(let i=0;i<sectBtn.length;i++)
    {
        sectBtn[i].addEventListener('click',function(){
            let currentBtn=document.querySelectorAll('.active-btn');
            currentBtn[0].className=currentBtn[0].className.replace('active-btn', '');
            this.className+=' active-btn';

//             When a button is clicked, the callback function defined within addEventListener is executed. This function performs the following steps:

// It selects all elements with the class active-btn using the document.querySelectorAll() method. This method returns a NodeList containing all matching elements.

// Since it is assumed that there will be only one element with the class active-btn, the code accesses the first element of the NodeList using currentBtn[0].

// The line currentBtn[0].className=currentBtn[0].className.replace('active-btn', ''); removes the class active-btn from the currently active button by replacing it with an empty string.

// Finally, this.className+=' active-btn'; adds the class active-btn to the button that was clicked. The this keyword refers to the button that triggered the event.

        })
    }
    //sections Active
    allSection.addEventListener('click',(e)=>{
        const id=e.target.dataset.id;
        if(id)
        {
            //remove selected from the other btns
            sectBtns.forEach((btn)=>{
                btn.classList.remove('active');
            })
            e.target.classList.add('active');
            //hide other section
            sections.forEach((section)=>{
                section.classList.remove('active');
            })

            const element=document.getElementById(id);
            element.classList.add('active');
        }
    });

   
}

PageTransitions();
