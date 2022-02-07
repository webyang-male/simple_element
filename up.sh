info=$1
if ["$info" = ""];
then info=":pencil: 组件库项目v1.0提交"
fi
git add -A
git commit -m "$info"
git push origin main