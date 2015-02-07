package main

import (
	"net/http"
	_ "net/http/pprof"
)

const (
	certFile = "cert.pem"
	keyFile  = "key.pem"
)

func init() {
	http.Handle("/", http.FileServer(http.Dir("web/")))
}

func main() {
	http.ListenAndServeTLS(":443", certFile, keyFile, nil)
}
