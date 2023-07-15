//ESM(ECMA Script Module) -> ECMA : javascript 표준 명칭
//CommonJs 방식으로 작성해야 함. ESM 방식은 브라우저에서 되고 Node.js환경에서는 이 지원이 안됨

module.exports = {
  plugins: [
    require('autoprefixer')
  ]
}