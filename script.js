
document.querySelectorAll('.accordion__question').forEach ((item) => {
    item.addEventListener('click', event => {
        console.log('click');
        let accCollapse = item.nextElementSibling

    if (!item.classList.contains('collapsing')) {

             //open accordion item

            if(!item.classList.contains('open')) {
            
                let accCollapse = item.nextElementSibling
        

                accCollapse.style.display = 'block'
                let accHeight = accCollapse.clientHeight;

                setTimeout(()=> {
                    accCollapse.style.height = accHeight + 'px';
                    accCollapse.style.display = '';
                }, 1)
        

                //Remove 'collapse and add "collapsing" class to .accordion__collapse (sibling)
                accCollapse.classList = 'accordion__collapse collapsing';

                //After X amount of time, remove "collapsing" class and add "collapse open" class

                setTimeout(()=> {
                    accCollapse.classList = 'accordion__collapse collapse open';
                } ,300);
            }

            //close accordion
            else {
                // Remove collapse open from accordion collapse, add collapsing 
                accCollapse.classList = 'accordion__collapse collapsing';
            
                setTimeout(()=> {
                        accCollapse.style.height = '0px';
                },1);
            
            
                // after X amount of time, remove "collapsing" class and add "collapse" class.
                setTimeout(()=> {
                    accCollapse.classList = 'accordion__collapse collapse';
                    accCollapse.style.height = '';
                } ,300);
            }
            item.classList.toggle('open');   
        }
    });
});