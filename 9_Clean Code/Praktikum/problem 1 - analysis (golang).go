packege main

type user struct {
    id          int
    username    int
    password    int
}

type userservice struct {
    t []user
}
func (u userservice) getallusers() []user{
    return u.t
}
func (u userservice) getallusers(id int) user{
    for _, r := range u.t {
        if id == r.id{
            return r
        }
    }
    return user {}
}