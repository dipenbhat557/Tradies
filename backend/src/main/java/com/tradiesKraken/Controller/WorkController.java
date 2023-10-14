package com.tradiesKraken.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.tradiesKraken.ModelDto.WorkDto;
import com.tradiesKraken.ServiceImpl.FileUploadServiceImpl;
import com.tradiesKraken.ServiceImpl.WorkServiceImpl;

@RestController
@RequestMapping("/work")
public class WorkController {

    @Autowired
    private WorkServiceImpl workService;

    @Autowired
    private FileUploadServiceImpl fileUploadService;

    String path = "src/work/images";

    @PostMapping("/{subCategoryId}")
    public ResponseEntity<WorkDto> create(@Param("title") String title, @RequestBody MultipartFile file,
            @PathVariable int subCategoryId) {
        WorkDto workDto = new WorkDto();

        workDto.setTitle(title);
        workDto.setSubCategoryId(subCategoryId);
        String fileName = this.fileUploadService.uploadImage(path, file);
        workDto.setWorkImg(fileName);

        return new ResponseEntity<WorkDto>(this.workService.createWork(workDto), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<WorkDto>> viewAll() {
        return new ResponseEntity<List<WorkDto>>(this.workService.viewAll(), HttpStatus.OK);
    }

    @GetMapping("/{workId}")
    public ResponseEntity<WorkDto> viewById(@PathVariable int workId) {
        return new ResponseEntity<WorkDto>(this.workService.viewById(workId), HttpStatus.OK);
    }

    @DeleteMapping("/{workId}")
    public ResponseEntity<String> delete(@PathVariable int workId) {
        return new ResponseEntity<String>("Deleted Successfully...", HttpStatus.OK);
    }

}
