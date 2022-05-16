package com.ctse.cartservice.model;

public class Authorized {

    private Boolean isAuthorized;

    public Authorized() {
    }

    public Authorized(Boolean isAuthorized) {
        this.isAuthorized = isAuthorized;
    }

    public Boolean getIsAuthorized() {
        return isAuthorized;
    }

    public void setIsAuthorized(Boolean authorized) {
        isAuthorized = authorized;
    }
}
