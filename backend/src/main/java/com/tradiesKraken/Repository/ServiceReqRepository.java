package com.tradiesKraken.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tradiesKraken.Model.ServiceReq;
import com.tradiesKraken.Model.User;

public interface ServiceReqRepository extends JpaRepository<ServiceReq, Integer> {

    public List<ServiceReq> findByReqUser(User reqUser);

    public List<ServiceReq> findByAccepterUser(User user);

}
