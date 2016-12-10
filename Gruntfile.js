module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      jadefile: {
        files: ["src/jade/**/*.jade"],
        tasks: ["jade"]
      },
      lessfile: {
        files: ["src/less/*.less"],
        tasks: ["less"]
      },
      coffeefile: {
        files: ["src/coffee/*.coffee"],
        tasks: ["coffee"]
      }
    },
    jade: {
      compile: {
        options: {
          pretty: true,
          debug: false
        },
        files: [{
          expand: true,
          cwd: "src/jade",
          src: "*.jade",
          dest: "./assets/view",
          ext: ".html"
        }]
      }
    },
    coffee: {
      compile: {
        expand: true,
        dd: true,
        cwd: "src/coffee",
        src: ["**/*.coffee"],
        dest: "./assets/js",
        ext: ".js"
      }
    },
    less: {
      development: {
        options: {
          paths: ["src/less"]
        },
        files: {
          "./assets/css/style.css": "src/less/style.less"
        }
      }
    },
    shell: {
      pack: {
        command: "electron-zip-packager . --platform=win32,darwin --arch=all --out=packages"
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-coffee");
  grunt.loadNpmTasks("grunt-contrib-jade");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-shell");

  grunt.registerTask("default", ["watch"]);
  grunt.registerTask("pack", ["shell:pack"]);
};
