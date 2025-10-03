-- CreateTable
CREATE TABLE `UserCart` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `cartId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `UserCart_userId_key`(`userId`),
    UNIQUE INDEX `UserCart_cartId_key`(`cartId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
