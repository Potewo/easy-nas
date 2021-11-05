package main

import (
	"fmt"
	"os"
	"net/http"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func main() {
	dirs(".")
	e := echo.New()
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowOrigins: []string{"http://localhost:8000"},
	}))
	e.GET("/api", api)
	e.Logger.Fatal(e.Start(":1234"))
}

type File struct {
	IsDir bool `json:"isDir"`
	Name string `json:"name"`
}

func dirs(dir string) []File {
	getFiles, err := os.ReadDir(dir)
	returnFiles := make([]File, 0)
	if err != nil {
		fmt.Println(err)
	}
	for _, file := range getFiles {
		returnFiles = append(returnFiles, File{IsDir: file.IsDir(), Name: file.Name()})
	}
	return returnFiles
}

func api(c echo.Context) error {
	files := dirs(".")
	if err := c.Bind(files); err != nil {
		return err
	}
	return c.JSON(http.StatusOK, files)
}
