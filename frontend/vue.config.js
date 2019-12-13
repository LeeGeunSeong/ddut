module.exports = { 
  devServer: { // api 요청이 있을때 어디에서 처리할지를 설정
    proxy: { 
      '/api': { 
        target: 'http://localhost:3000/api',
        changeOrigin: true, 
        pathRewrite: { 
          '^/api': ''
        } 
      } 
    } 
  },
  outputDir: '../backend/public',  // 배포 파일의 위치를 지정
}