#!/bin/bash

# 環境設定ファイルセットアップ
cd `dirname $0`

FILE=.env_bak
touch $FILE
echo "# 郵便番号検索" >> $FILE
echo "API_KEY=" >> $FILE
