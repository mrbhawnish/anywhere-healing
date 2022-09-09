FROM node:16-stretch as build
RUN apt update && apt install -y make g++
COPY . /app
WORKDIR /app
RUN npm install

# Dont include python, make, or g++ for the execution image
FROM node:16-stretch
RUN apt update && apt install -y xfonts-75dpi xfonts-base xfonts-utils libfontenc1 libxfont1 xfonts-encodings
RUN wget https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6-1/wkhtmltox_0.12.6-1.stretch_amd64.deb -P /tmp && \
  dpkg -i /tmp/wkhtmltox_0.12.6-1.stretch_amd64.deb
COPY --from=build /app /app
WORKDIR /app
CMD npm start