function cdAndCheckout () {
    cd ./InternetTechDevelop && git checkout hybrid_game_docs_v1.0
}

function gitClone() {
	git clone ssh://yegaogao@smartgit:29418/PrivateGroups/InternetTechDevelop
    cdAndCheckout
}

function gitPull() {
    cdAndCheckout
	git pull origin hybrid_game_docs_v1.0:hybrid_game_docs_v1.0
}

if test -d ./InternetTechDevelop; then
    echo "\033[34m \033[32m 检查到已经存在InternetTechDevelop,是否从仓库hybrid_game_docs_v1.0分支拉取最新的文档?\033[33m \033[05my/n \033[0m"
	read -n 1 -s flag1
	if [ $flag1 = "Y" -o $flag1 = "y" ]; then
		gitPull
	fi
else
	gitClone
fi