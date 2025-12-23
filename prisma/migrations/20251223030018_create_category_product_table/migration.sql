-- CreateTable
CREATE TABLE `category_product` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `type` VARCHAR(191) NOT NULL DEFAULT 'klinik',
    `category_stock_id` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `deleted_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `category_product` ADD CONSTRAINT `category_product_category_stock_id_fkey` FOREIGN KEY (`category_stock_id`) REFERENCES `category_stock`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
