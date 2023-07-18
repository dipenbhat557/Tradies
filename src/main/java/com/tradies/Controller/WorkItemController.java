package com.tradies.Controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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

import com.tradies.Model.WorkItem;
import com.tradies.Services.FileUploadService;
import com.tradies.Services.WorkItemService;

@RestController
@RequestMapping("/item")
public class WorkItemController {

    @Autowired
    private WorkItemService workItemService;

    @Autowired
    private FileUploadService fileUploadService;

    private String path="src/workItem/images";

    @PostMapping("/create/{categoryId}")
    public ResponseEntity<WorkItem> create(@RequestBody WorkItem workItem, @PathVariable int categoryId){
        return new ResponseEntity<WorkItem>(this.workItemService.createItems(workItem, categoryId), HttpStatus.OK);
    }

    @GetMapping("/view")
    public ResponseEntity<List<WorkItem>> viewAll(){
        return new ResponseEntity<List<WorkItem>>(this.workItemService.viewAllItems(), HttpStatus.OK);
    }

    @GetMapping("/viewById/{itemId}")
    public ResponseEntity<WorkItem> viewById(@PathVariable int itemId){
        return new ResponseEntity<WorkItem>(this.workItemService.viewById(itemId), HttpStatus.OK);
    }

    @GetMapping("/delete/{itemId}")
    public ResponseEntity<String> delete(@PathVariable int itemId){
        this.workItemService.delete(itemId);
        return new ResponseEntity<String>("Item deleted successfully......", HttpStatus.OK);
    }

    @PostMapping("/images/{itemId}")
    public ResponseEntity<?> uploadItemImage(@PathVariable int itemId, @RequestParam("itemImage") MultipartFile file){

        WorkItem item = this.workItemService.viewById(itemId);
        String imageName = null;

        try{
            imageName = this.fileUploadService.uploadImage(path, file);
            item.setImageName(imageName);

            WorkItem updatedItem = this.workItemService.updateItem(itemId, item);

            return new ResponseEntity<>(updatedItem, HttpStatus.OK);
        }catch(Exception e){
            e.printStackTrace();
            return new ResponseEntity<>(Map.of("Message ", "File not uploaded to work item"),HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/viewByCategory/{categoryId}")
    public ResponseEntity<List<WorkItem>> viewByCategory(@PathVariable int categoryId){
        return new ResponseEntity<List<WorkItem>>(this.workItemService.getByCategory(categoryId),HttpStatus.OK);
    }
    
}
