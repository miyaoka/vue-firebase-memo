<template>
  <div id="app">
    <h1 style="font-size:14px">
      VueとFirebaseでリアルタイムメモアプリ
      <span
        style="float: right; padding: 3px 0"
      >
        <a href="https://github.com/miyaoka/vue-firebase-memo">
          source
          <icon name="github" scale="2" color="#000"></icon>
        </a>
      </span>
    </h1>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  font-family: -apple-system-body, BlinkMacSystemFont, "Helvetica Neue", "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Noto Sans Japanese", "游ゴシック  Medium", "Yu Gothic Medium", "メイリオ", meiryo, sans-serif;
}
a {
  color: #999;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
.el-dialog,
.el-message-box {
  width: 80%;
}
</style>
