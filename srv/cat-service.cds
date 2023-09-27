using com.bookshop as my from '../db/data-model';

@path : 'my_path'
service CatalogService {
    entity Books as projection on my.Books;
}
