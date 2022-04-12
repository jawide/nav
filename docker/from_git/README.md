### 克隆代码或者复制docker-compose.yml和Dockerfile
```bash
git clone https://github.com/jawide/nav
```

### 编辑.env.production文件
```bash
vim nav/nav.production
```
```dotenv
# (可选) 后端接口地址，例如 http://nav.com/api
VUE_APP_API_URL=VUE_APP_API_URL
  # (可选) 前端部署地址，例如 http://nav.com/home
VUE_APP_PUBLIC_PATH=VUE_APP_PUBLIC_PATH
  # (可选) 背景图片地址
VUE_APP_BACKGROUND=VUE_APP_BACKGROUND
```
### 使用docker-compose一键构建部署
```bash
cd nav/docker/from_git
docker-compose up -d
```