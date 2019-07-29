const fs = require('fs')

const xml =`<q-chart bindChartCreated="onChartCreated" chart-class='qchart'></q-chart>`

const xss = `page {
  width: 100%;
  height: 100%;
  display: flex;
}
q-chart {
  width: 100%;
  height: 100%;
}
.qchart {
  width: 100%;
  height: 95%;
  margin: auto;
}`

const write = (path,str)=>{
  fs.writeFile(path,str,function(err){
    if(err){
      console.log(`${path} 写入失败`)
    }else{
      console.log(`${path} 写入成功`)
    }
  })
}

fs.readdir('./pages',function(err,files){
  files.forEach(file => {
    if(file!=='index'){
      const subDir = fs.readdirSync(`./pages/${file}`)
      subDir.forEach(sub=>{
        const p = `pages/${file}/${sub}/${sub}`
        const wxml = p+'.wxml'
        const wxss = p+'.wxss'
        write(wxml,xml)
        write(wxss,xss)
      })
    }
  });
})