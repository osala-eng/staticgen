#!/usr/bin/bash

line="http://resume.jsoan.com/developer-challange/"
echo -e ${line%/}
noext=${line%/}
echo -e ${noext##*/}
