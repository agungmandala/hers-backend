-- CreateTable
CREATE TABLE `location` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `address` VARCHAR(191) NULL,
    `phone` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `is_active` BOOLEAN NOT NULL,
    `open_time` DATETIME(3) NULL,
    `close_time` DATETIME(3) NULL,
    `is_store` BOOLEAN NOT NULL DEFAULT false,
    `latitude` DECIMAL(11, 7) NOT NULL DEFAULT 0,
    `longitude` DECIMAL(11, 7) NOT NULL DEFAULT 0,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
