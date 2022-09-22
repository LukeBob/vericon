
export const createGroups = (data) => {
    let pr = {}
    const arr = data.reduce((groups, item) => {
        const group = (groups[item.deviceType] || []);
        group.push(item);
        pr[item.deviceType] = group
        return pr
      })

    
    return Object.entries(arr);
}



const returnPercent = (data) => { 
    const totalcount = data.length
    let online =0;
    let offline =0;
    let failed = 0;
    let notFailed = 0;
    data.map( item => {

        if (item.connectionStatus === "Offline") {
             offline += 1
        } else {
             online += 1
        }

        if (item.status === "Failed") {
            failed += 1
        } else {
            notFailed += 1
        }

        return
        

        

    } )

    const offline_percent = Math.round((offline / totalcount * 100))
    const online_percent = Math.round((online / totalcount * 100))
    const failed_percent = Math.round((failed / totalcount * 100))
    const notFailed_percent = Math.round((notFailed / totalcount * 100))

    return {
        "offline": offline_percent,
         "online": online_percent,
         "failed": failed_percent,
         "notFailed": notFailed_percent
    }
}




export const formatData = (data) => {
   


    const percent = data.map(item => {
        const percent = returnPercent(item[1]);
    //    item[1].map( asset => console.log(asset))
        return {
            "type": item[0],
            percent,
            "products": item[1]
        };
    })


    return percent;


   
}