


function notification(){

    if(!window.Notification){
        
        confirm('Notification Not supported by this Broweser');
        
    } else {

        if(Notification.permission == 'granted'){
            const notify = new Notification('Hi XYZ User!', {
                    body: 'We have Something new for you?',
                    icon: 'https://bit.ly/2DYqRrh'
                })
        } else {

            Notification.requestPermission().then( (response)=>{
                if(response == 'granted'){
                     const notify = new Notification('Hi XYZ User!', {
                                        body: 'We have Something new for you?',
                                        icon: 'https://bit.ly/2DYqRrh'
                                    })
                } else {

                    console.log("Notification Blocked by User")
                }
            }).catch(function (err) {
                console.error(err)
                })

        }

    }
}