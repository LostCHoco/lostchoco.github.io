const fileSelecter=document.querySelector("#input");
fileSelecter.addEventListener("change",(e)=>{
    const img=e.target.files[0];
    const reader=new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
        const output= document.querySelector("#out");
        const imageData = reader.result;
        console.dir(reader);
        console.log(imageData);
        output.src=imageData;
        const regex=/.+,/;
        const endcodedData=imageData.replace(regex,"");
        console.log(endcodedData);
        // console.log(atob(endcodedData));
    };
})