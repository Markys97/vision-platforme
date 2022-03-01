let listItems=document.querySelectorAll('.developer__listItem');
let contenList= document.querySelectorAll('.developer__content');
let itemId;
let contentId;


listItems.forEach((itemList,itemIndex, listItems)=>{
    itemList.addEventListener('click',e=>{
        itemId= e.target.dataset.id;
        if(itemList.classList.contains('developer__listItem--active')){
          
        }else{
            listItems.forEach(item=> item.classList.remove('developer__listItem--active'));
            itemList.classList.add('developer__listItem--active')
            contenList.forEach((content,contentIdex,contenList)=>{
                
                if(content.getAttribute('data-id')===itemId)
                {
                    console.log(content.getAttribute('data-id'),itemId)
                    content.classList.add('developer__content--active')
                }else{
                    content.classList.remove('developer__content--active')
                }
            })
        }

        
    })
})