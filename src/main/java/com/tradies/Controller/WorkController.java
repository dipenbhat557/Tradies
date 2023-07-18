package com.tradies.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.tradies.Model.Work;
import com.tradies.Services.FileUploadService;
import com.tradies.Services.WorkItemService;
import com.tradies.Services.WorkService;

@RestController
@RequestMapping("/work")
public class WorkController {

    @Autowired
    private WorkService workService;


    @Autowired
    private FileUploadService fileUploadService;

    private String path = "src/work/images";

    @PostMapping("/create/{itemId}")
    public ResponseEntity<Work> create(@RequestBody Work work, @PathVariable int itemId){
        return new ResponseEntity<Work>(this.workService.create(work, itemId), HttpStatus.CREATED);
    }

    @GetMapping("/view")
    public ResponseEntity<List<Work>> viewAllWorks(){
        return new ResponseEntity<List<Work>>(this.workService.viewAllWorks(), HttpStatus.OK);
    }

    @GetMapping("viewById/{workId}")
    public ResponseEntity<Work> viewById(@PathVariable int workId){
        return new ResponseEntity<Work>(this.workService.viewById(workId), HttpStatus.OK);
    }

    @GetMapping("viewByItem/{itemId}")
    public ResponseEntity<List<Work>> viewByItem(@PathVariable int itemId){
        return new ResponseEntity<List<Work>>(this.workService.viewWorkByItem(itemId), HttpStatus.OK);
    }

    @GetMapping("/delete/{workId}")
    public ResponseEntity<String> delete(@PathVariable int workId){
        this.workService.delete(workId);

        return new ResponseEntity<String>("Deleted successfully ..... ",HttpStatus.OK);
    }

    @PostMapping("/images/{workId}")
    public ResponseEntity<?> uploadWorkImage(@PathVariable int workId, @RequestParam("workImage") MultipartFile file){

        Work work = this.workService.viewById(workId);
        String imageName = null;

        try {
            imageName = this.fileUploadService.uploadImage(path, file);
            work.setImageName(imageName);

            return new ResponseEntity<Work>(this.workService.update(workId, work), HttpStatus.OK);
            
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(Map.of("Message","Could not upload image"), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
}
