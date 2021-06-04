---
title: 常⽤ Linux 命令备忘⼿册
tags:
  - linux
  - 精选
  - 知识点
categories: Linux
keywords: linux,知识点,linux命令行
description: 常⽤ Linux 命令备忘⼿册
cover: https://cdn.jsdelivr.net/gh/realwds/cdn@master/blog-cover/u=2564444625,3313783209&fm=26&gp=0.5111wpwr71c0.jpg
abbrlink: 268f35ec
date: 2021-06-04 11:25:00
---

## 关机/重启/注销

| 作⽤            | 命令                |
|---------------|-------------------|
| **即刻关机**          | `shutdown -h now`   |
| **10分钟后关机**       | `shutdown -h 10`    |
| **11：00关机**       | `shutdown -h 11:00` |
| **预定时间关机（10分钟后）** | `shutdown -h +10`   |
| **取消指定时间关机**     | `shutdown -c`       |
| **重启**            | `shutdown -r now`   |
| **10分钟之后重启**      | `shutdown -r 10`    |
| **定时重启**          | `shutdown -r 11:00` |
| **重启**            | `reboot`           |
| **重启**            | `init 6`            |
| **⽴刻关机**          | `init 0`            |
| **关机**            | `telinit 0`         |
| **⽴刻关机**          | `poweroff`          |
| **关机**            | `halt`              |
| **buff数据同步到磁盘**   | `sync`              |
| **退出登录Shell**     | `logout`            |

## 系统信息和性能查看

| 作⽤                   | 命令                          |
|----------------------|-----------------------------|
| **查看内核/OS/CPU信息**        | `uname -a`                    |
| **查看内核版本**               | `uname -r`                    |
| **查看处理器架构**              | `uname -m`                    |
| **查看处理器架构**              | `arch`                        |
| **查看计算机名**               | `hostname`                    |
| **显示当前登录系统的⽤户**          | `who`                         |
| **显示登录时的⽤户名**            | `who am i`                    |
| **显示当前⽤户名**              | `whoami`                      |
| **查看linux版本信息**          | `cat /proc/version`           |
| **查看CPU信息**              | `cat /proc/cpuinfo`           |
| **查看中断**                 | `cat /proc/interrupts`        |
| **查看系统负载**               | `cat /proc/loadavg`           |
| **查看系统运⾏时间、⽤户数、负载**      | `uptime`                      |
| **查看系统的环境变量**            | `env`                         |
| **查看系统USB设备信息**          | `lsusb -tv`                   |
| **查看系统PCI设备信息**          | `lspci -tv`                   |
| **查看已加载的系统模块**           | `lsmod`                       |
| **查看内存总量**               | `grep MemTotal /proc/meminfo` |
| **查看空闲内存量**              | `grep MemFree /proc/meminfo`  |
| **查看内存⽤量和交换区⽤量**         | `free -m`                     |
| **显示系统⽇期时间**             | `date`                        |
| **显示2021⽇历表**           | `cal 2021`                    |
| **动态显示cpu/内存/进程等情况**     | `top `                        |
| **每1秒采⼀次系统状态，采20次**      | `vmstat 1 20`                 |
| **查看io读写/cpu使⽤情况**       | `iostat`                      |
| **查询cpu使⽤情况（1秒⼀次，共10次）** | `sar -u 1 10`                 |
| **查询磁盘性能**               | `sar -d 1 10`                 |

## 磁盘和分区

| 作⽤                | 命令                                  |
|-------------------|-------------------------------------|
| **查看所有磁盘分区**          | `fdisk -l`                            |
| **查看所有交换分区**          | `swapon -s`                           |
| **查看磁盘使⽤情况及挂载点**      | `df -h`                               |
| **同上**                | `df -hl`                              |
| **查看指定某个⽬录的⼤⼩**       | `du -sh /dir`                         |
| **从⾼到低依次显示⽂件和⽬录⼤⼩**   | `du -sk * ▏sort -rn`                 |
| **挂载hda2盘**           | `mount /dev/hda2 /mnt/hda2`           |
| **指定⽂件系统类型挂载（如ntfs）** | `mount -t ntfs /dev/sdc1 /mnt/usbhd1` |
| **挂载iso⽂件**           | `mount -o loop xxx.iso /mnt/cdrom`    |
| **挂载usb盘/闪存设备**       | `mount /dev/sda1 /mnt/usbdisk`        |
| **通过设备名卸载**           | `umount -v /dev/sda1`                 |
| **通过挂载点卸载**           | `umount -v /mnt/mymnt`                |
| **强制卸载(慎⽤)**          | `fuser -km /mnt/hda1`                 |

## ⽤户和⽤户组

| 作⽤                     | 命令                                                    |
|------------------------|-------------------------------------------------------|
| **创建⽤户**                   | `useradd user_name`                                     |
| **删除⽤户**                   | `userdel -r user_name`                                  |
| **修改⽤户的组**                 | `usermod -g group_name user_name`                       |
| **将⽤户添加到组**                | `usermod -aG group_name user_name`                      |
| **修改⽤户登录的Shell、 主⽬录以及⽤户组** | `usermod -s /bin/ksh -d /home/codepig –g dev user_name` |
| **查看test⽤户所在的组**           | `groups test`                                           |
| **创建⽤户组**                  | `groupadd group_name`                                   |
| **删除⽤户组**                  | `groupdel group_name`                                   |
| **重命名⽤户组**                 | `groupmod -n new_name old_name`                         |
| **完整切换到⼀个⽤户环境**            | `su - user_name`                                        |
| **修改⼝令**                   | `passwd`                                                |
| **修改某⽤户的⼝令**               | `passwd user_name`                                      |
| **查看活动⽤户**                 | `w`                                                     |
| **查看指定⽤户test信息**           | `id test`                                               |
| **查看⽤户登录⽇志**               | `last`                                                  |
| **查看当前⽤户的计划任务**            | `crontab -l`                                            |
| **查看系统所有⽤户**               | `cut -d: -f1 /etc/passwd`                               |
| **查看系统所有组**                | `cut -d: -f1 /etc/group`                                |

## ⽹络和进程管理

| 作⽤                          | 命令                                                            |
|-----------------------------|---------------------------------------------------------------|
| **查看⽹络接⼝属性**                    | `ifconfig`                                                      |
| **查看某⽹卡的配置**                    | `ifconfig eth0`                                                 |
| **查看路由表**                       | `route -n`                                                      |
| **查看所有监听端⼝**                    | `netstat -lntp`                                                 |
| **查看已经建⽴的TCP连接**                | `netstat -antp`                                                 |
| **查看TCP/UDP的状态信息**              | `netstat -lutp`                                                 |
| **启⽤eth0⽹络设备**                  | `ifup eth0`                                                     |
| **禁⽤eth0⽹络设备**                  | `ifdown eth0`                                                  |
| **查看iptables规则**                | `iptables -L`                                                   |
| **配置ip地址**                      | `ifconfig eth0 192.168.1.1 netmask 255.255.255.0`               |
| **以dhcp模式启⽤eth0**               | `dhclient eth0`                                                 |
| **配置默认⽹关**                     | `route add -net 0/0 gw Gateway_IP`                              |
| **配置静态路由到达⽹ 络'192.168.0.0/16'** | `route add -net 192.168.0.0 netmask 255.255.0.0 gw 192.168.1.1` |
| **删除静态路由**                    | `route del 0/0 gw Gateway_IP`                                   |
| **查看主机名**                       | `hostname`                                                      |
| **解析主机名**                       | `host blog.realwds.com`                                         |
| **查询DNS记录，查看域名解 析是否正常**         | `nslookup blog.realwds.com`                                     |
| **查看所有进程**                      | `ps -ef`                                                        |
| **过滤出你需要的进程**                   | `ps -ef ▏grep name`                                            |
| **kill指定名称的进程**                 | `kill -s name`                                                  |
| **kill指定pid的进程**               | `kill -s pid`                                                   |
| **实时显示进程状态**                    | `top`                                                           |
| **每1秒采⼀次系统状态，采 20次**            | `vmstat 1 20`                                                   |
| **查看io读写/cpu使⽤情况**              | `iostat`                                                        |
| **查询cpu使⽤情况（1秒⼀ 次，共10次）**       | `sar -u 1 10`                                                   |
| **查询磁盘性能**                     | `sar -d 1 10`                                                  |

## 常⻅系统服务命令

| 作⽤     | 命令                      |
|--------|-------------------------|
| **列出系统服务** | `chkconfig --list`        |
| **查看某个服务** | `service <服务名> status`    |
| **启动某个服务** | `service <服务名> start`     |
| **终⽌某个服务** | `service <服务名> stop`      |
| **重启某个服务** | `service <服务名> restart`   |
| **查看某个服务** | `systemctl status <服务名>`  |
| **启动某个服务** | `systemctl start <服务名>`   |
| **终⽌某个服务** | `systemctl stop <服务名>`    |
| **重启某个服务** | `systemctl restart <服务名>` |
| **开启⾃启动**  | `systemctl enable <服务名>`  |
| **关闭⾃启动**  | `systemctl disable <服务名>` |

## ⽂件和⽬录操作

| 作⽤                                       | 命令                       |
|------------------------------------------|--------------------------|
| **进⼊某个⽬录**                                   | `cd <⽬录名>`                |
| **回上级⽬录**                                    | `cd ..`                    |
| **回上两级⽬录**                                   | `cd ../..`                 |
| **进个⼈主⽬录**                                   | `cd`                       |
| **回上⼀步所在⽬录**                                 | `cd -`                     |
| **显示当前路径**                                   | `pwd`                      |
| **查看⽂件⽬录列表**                                | `ls`                       |
| **查看⽬录中内容（显示是⽂件还是⽬录）**                       | `ls -F`                   |
| **查看⽂件和⽬录的详情列表**                             | `ls -l`                    |
| **查看隐藏⽂件**                                   | `ls -a`                    |
| **查看⽂件和⽬录的详情列表（增强⽂件⼤⼩易读性）**                  | `ls -lh`                   |
| **查看⽂件和⽬录列表（以⽂件⼤⼩升序查看）**                     | `ls -lSr`                  |
| **查看⽂件和⽬录的树形结构**                             | `tree`                     |
| **创建⽬录**                                     | `mkdir <⽬录名>`             |
| **同时创建两个⽬录**                                 | `mkdir dir1 dir2`          |
| **创建⽬录树**                                    | `mkdir -p /tmp/dir1/dir2`  |
| **删除'file1'⽂件**                              | `rm -f file1`              |
| **删除'dir1'⽬录**                              | `rmdir dir1`               |
| **删除'dir1'⽬录和其内容**                           | `rm -rf dir1`              |
| **同时删除两个⽬录及其内容**                             | `rm -rf dir1 dir2`         |
| **重命名/移动⽬录**                                 | `mv old_dir new_dir`       |
| **复制⽂件**                                     | `cp file1 file2`           |
| **复制某⽬录下的所有⽂件⾄当前⽬录**                         | `cp dir/* .`               |
| **复制⽬录**                                     | `cp -a dir1 dir2`          |
| **复制⼀个⽬录⾄当前⽬录**                              | `cp -a /tmp/dir1 .`        |
| **创建指向⽂件/⽬录的软链接**                            | `ln -s file1 link1`        |
| **创建指向⽂件/⽬录的物理链接**                           | `ln file1 lnk1`            |
| **从跟⽬录开始搜索⽂件/⽬录**                            | `find / -name file1`       |
| **搜索⽤户user1的⽂件/⽬录**                          | `find / -user user1`       |
| **在⽬录/dir中搜带有.bin后缀的⽂件**                     | `find /dir -name *.bin`    |
| **快速定位⽂件**                                   | `locate <关键词>`             |
| **寻找.mp4结尾的⽂件**                              | `locate *.mp4`             |
| **显示某⼆进制⽂件/可执⾏⽂件的路径**                        | `whereis <关键词>`            |
| **查找系统⽬录下某的⼆进制⽂件**                           | `which <关键词>`              |
| **设置⽬录所有者(u)、群组(g)及其他⼈(o)的读（r）写 (w)执⾏(x)权限** | `chmod ugo+rwx dir1`       |
| **移除群组(g)与其他⼈(o)对⽬录的读写执⾏权限**                 | `chmod go-rwx dir1`        |
| **改变⽂件的所有者属性**                               | `chown user1 file1`        |
| **改变⽬录的所有者属性**                               | `chown -R user1 dir1`      |
| **改变⽂件群组**                                   | `chgrp group1 file1`       |
| **改变⽂件的所有⼈和群组**                              | `chown user1:group1 file1` |

## ⽂件查看和处理

| 作⽤                         | 命令                            |
|----------------------------|-------------------------------|
| **查看⽂件内容**                     | `cat file1`                     |
| **查看内容并标示⾏数**                  | `cat -n file1`                  |
| **从最后⼀⾏开始反看⽂件内容**              | `tac file1`                     |
| **查看⼀个⻓⽂件的内容**                 | `more file1`                    |
| **类似more命令，但允许反向操作**           | `less file1`                    |
| **查看⽂件前两⾏**                    | `head -2 file1`                 |
| **查看⽂件后两⾏**                    | `tail -2 file1`                 |
| **实时查看添加到⽂件中的内容**              | `tail -f /log/msg`              |
| **在⽂件hello.txt中查找关键词test**    | `grep test hello.txt`           |
| **在⽂件hello.txt中查找以sheep开头的内容** | `grep ^sheep hello.txt`         |
| **选择hello.txt⽂件中所有包含数字的⾏**     | `grep [0-9] hello.txt`          |
| **将hello.txt⽂件中的s1替换成s2**      | `sed 's/s1/s2/g' hello.txt`     |
| **从hello.txt⽂件中删除所有空⽩⾏**       | `sed '/^$/d' hello.txt`         |
| **从hello.txt⽂件中删除所有注释和空⽩⾏**    | `sed '/ *#/d; /^$/d' hello.txt` |
| **从⽂件hello.txt 中排除第⼀⾏**        | `sed -e '1d' hello.txt`         |
| **查看只包含关键词"s1"的⾏**             | `sed -n '/s1/p' hello.txt`      |
| **删除每⼀⾏最后的空⽩字符**               | `sed -e 's/ *$//' hello.txt`    |
| **从⽂档中只删除词汇s1并保留剩余全部**         | `sed -e 's/s1//g' hello.txt`    |
| **查看从第⼀⾏到第5⾏内容**               | `sed -n '1,5p;5q' hello.txt`    |
| **查看第5⾏**                      | `sed -n '5p;5q' hello.txt`      |
| **合并两个⽂件或两栏的内容**               | `paste file1 file2`             |
| **合并两个⽂件或两栏的内容，中间⽤"+"区分**      | `paste -d '+' file1 file2`      |
| **排序两个⽂件的内容**                  | `sort file1 file2`              |
| **删除重复行后的内容**                  | `uniq file1`                    |
| **⽐较两个⽂件的内容(去除'file1'所含内容)**   | `comm -1 file1 file2`           |
| **⽐较两个⽂件的内容(去除'file2'所含内容)**   | `comm -2 file1 file2`           |
| **⽐较两个⽂件的内容(去除两⽂件共有部分)**       | `comm -3 file1 file2`           |

## 打包和解压

| 作⽤             | 命令                                |
|----------------|-----------------------------------|
| **压缩⾄zip包**        | `zip xxx.zip file`                  |
| **将多个⽂件+⽬录压成zip包** | `zip -r xxx.zip file1 file2 dir1`   |
| **解压zip包**         | `unzip xxx.zip`                     |
| **创建⾮压缩tar包**      | `tar -cvf xxx.tar file`             |
| **将多个⽂件+⽬录打tar包**  | `tar -cvf xxx.tar file1 file2 dir1` |
| **查看tar包的内容**      | `tar -tf xxx.tar`                   |
| **解压tar包**         | `tar -xvf xxx.tar`                  |
| **将tar包解压⾄指定⽬录**   | `tar -xvf xxx.tar -C /dir`          |
| **创建bz2压缩包**       | `tar -cvfj xxx.tar.bz2 dir`         |
| **解压bz2压缩包**       | `tar -jxvf xxx.tar.bz2`             |
| **创建gzip压缩包**      | `tar -cvfz xxx.tar.gz dir`          |
| **解压gzip压缩包**      | `tar -zxvf xxx.tar.gz`              |
| **解压bz2压缩包**       | `bunzip2 xxx.bz2`                   |
| **压缩⽂件**           | `bzip2 filename`                    |
| **解压gzip压缩包**      | `gunzip xxx.gz`                     |
| **压缩⽂件**           | `gzip filename`                     |
| **最⼤程度压缩**         | `gzip -9 filename`                  |

## RPM包管理命令

| 作⽤               | 命令                        |
|------------------|---------------------------|
| **查看已安装的rpm包**       | `rpm -qa`                   |
| **查询某个rpm包**         | `rpm -q pkg_name`           |
| **显示xxx功能是由哪个包提供的**  | `rpm -q --whatprovides xxx` |
| **显示xxx功能被哪个程序包依赖的** | `rpm -q --whatrequires xxx` |
| **显示xxx包的更改记录**      | `rpm -q --changelog xxx`    |
| **查看⼀个包的详细信息**       | `rpm -qi pkg_name`          |
| **查询⼀个包所提供的⽂档**      | `rpm -qd pkg_name`          |
| **查看已安装rpm包提供的配置⽂件** | `rpm -qc pkg_name`          |
| **查看⼀个包安装了哪些⽂件**     | `rpm -ql pkg_name`          |
| **查看某个⽂件属于哪个包**      | `rpm -qf filename`          |
| **查询包的依赖关系**         | `rpm -qR pkg_name`          |
| **安装rpm包**           | `rpm -ivh xxx.rpm`          |
| **测试安装rpm包**         | `rpm -ivh --test xxx.rpm`   |
| **安装rpm包时忽略依赖关系**    | `rpm -ivh --nodeps xxx.rpm` |
| **卸载程序包**            | `rpm -e xxx`               |
| **升级确定已安装的rpm包**     | `rpm -Fvh pkg_name`         |
| **升级rpm包(若未安装则会安装)** | `rpm -Uvh pkg_name`         |
| **RPM包详细信息校验**       | `rpm -V pkg_name`           |

## YUM包管理命令

| 作⽤          | 命令                                |
|-------------|-------------------------------------|
| **显示可⽤的源仓库**    | `yum repolist enabled`                |
| **搜索软件包**       | `yum search pkg_name`                 |
| **下载并安装软件包**    | `yum install pkg_name`                |
| **只下载不安装**      | `yum install --downloadonly pkg_name` |
| **显示所有程序包**     | `yum list`                            |
| **查看当前系统已安装包**  | `yum list installed`                  |
| **查看可以更新的包列表**  | `yum list updates`                    |
| **查看可升级的软件包**   | `yum check-update`                    |
| **更新所有软件包**     | `yum update`                          |
| **升级指定软件包**     | `yum update pkg_name`                 |
| **列出软件包依赖关系**   | `yum deplist pkg_name`                |
| **删除软件包**       | `yum remove pkg_name`                 |
| **清除缓存**        | `yum clean all`                       |
| **清除缓存的软件包**    | `yum clean packages`                  |
| **清除缓存的header** | `yum clean headers`                   |


## DPKG包管理命令

| 作⽤            | 命令                 |
|---------------|----------------------|
| **列出deb包的内容**     | `dpkg -c xxx.deb`      |
| **安装/更新deb包**     | `dpkg -i xxx.deb`      |
| **移除deb包**        | `dpkg -r pkg_name`     |
| **移除deb包(不保留配置)** | `dpkg -P pkg_name`     |
| **查看系统中已安装deb包**  | `dpkg -l`              |
| **显示包的⼤致信息**      | `dpkg -l pkg_name`     |
| **查看deb包安装的⽂件**   | `dpkg -L pkg_name`     |
| **查看包的详细信息**      | `dpkg -s pkg_name`     |
| **解开deb包的内容**     | `dpkg –unpack xxx.deb` |

## APT软件⼯具

|  作⽤         | 命令                      |
|-------------|---------------------------|
| **搜索程序包**       | `apt-cache search pkg_name` |
| **获取包的概览信息**   | `apt-cache show pkg_name`   |
| **安装/升级软件包**    | `apt-get install pkg_name`  |
| **卸载软件（包括配置）**  | `apt-get purge pkg_name`    |
| **卸载软件（不包括配置）** | `apt-get remove pkg_name`   |
| **更新包索引信息**    | `apt-get update`            |
| **更新已安装软件包**    | `apt-get upgrade`           |
| **清理缓存**        | `apt-get clean`             |

## 参考文献

[《Linux 操作系统常用操作和命令》 - CodeSheep](https://www.bilibili.com/video/BV14A411378a)
