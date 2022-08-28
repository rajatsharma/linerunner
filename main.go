package main

import (
	"encoding/json"
	"image"
	"io/ioutil"
	"log"
	"net/http"

	"github.com/zx9597446/rdp"
)

func handleRequest(w http.ResponseWriter, r *http.Request) {
	var imagePoints []image.Point

	body, err := ioutil.ReadAll(r.Body)

	if err != nil {
		log.Fatalf("cannot read body %v", err)
	}

	err = json.Unmarshal(body, &imagePoints)

	if err != nil {
		log.Fatalf("cannot unmarshal body %v", err)
	}

	jsonResp, err := json.Marshal(rdp.Process(imagePoints, 0.5))

	if err != nil {
		log.Fatalf("cannot marshal response %v", err)
	}

	w.Write(jsonResp)
	return
}

func main() {
	http.HandleFunc("/", handleRequest)
	println("Server running at http://localhost:8089")
	log.Panicln(http.ListenAndServe(":8089", nil))
}
