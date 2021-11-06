FROM golang:1.17-alpine as golang

WORKDIR /go/src/

COPY . .

RUN go get -d -v \
  && go install -v \
  && go build -o hello

##

FROM scratch

COPY --from=golang /go/src/hello /

CMD ["/hello"]